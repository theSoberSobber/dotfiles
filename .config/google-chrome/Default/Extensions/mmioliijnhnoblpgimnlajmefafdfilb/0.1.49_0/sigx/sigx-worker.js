// modified version of the original sigx-worker which strips out all un-used functions
var onSignatureReady = function(index, pointer, size) {
    var signatureArray = new Int8Array(size);
    signatureArray.set(Module.HEAP8.subarray(pointer, pointer + size));

    self.postMessage({
        type: 'sigready',
        index: index,
        signatureArray: signatureArray,
    });
};
if (self.addEventListener) {
    self.addEventListener(
        'message',
        function(e) {
            switch (e.data.type) {
                case 'getSigX':
                    self.importScripts('sigx.js');
                    getSigX(e.data.audioF32, e.data.index, e.data.sampleRate);
                    break;
            }
        },
        false
    );
}

var getSigX = function(audioF32, index, sampleRate) {
        var begin = function() {
            var buffer = Module._malloc(audioF32.length * 4);
            Module.HEAPF32.set(audioF32, buffer / 4);
            Module.ccall(
                'extract_signature',
                null,
                ['number', 'number', 'number', 'number'],
                [index, sampleRate, buffer, audioF32.length],
                { async: true }
            );
            Module._free(buffer);
        };
        addOnPostRun(begin);
    },
    setMessage = function(index, msg) {
        self.postMessage({
            type: 'status',
            index: index,
            msg: msg,
        });
    },
    errorHandler = function(e) {
        if (e.target && e.target.error) {
            switch (e.target.error.code) {
                case e.target.error.NOT_FOUND_ERR:
                    msg = 'File not found.';
                    break;
                case e.target.error.NOT_READABLE_ERR:
                    msg = 'File not readable.';
                    break;
                case e.target.error.ABORT_ERR:
                    break; // noop
                default:
                    msg = 'An error occurred reading self file.';
            }
        } else if (e.msg) {
            msg = e.msg;
        }
        if (msg) {
            self.postMessage({
                type: 'error',
                msg: msg,
            });
        }
    };
