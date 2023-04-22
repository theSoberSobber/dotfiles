syntax on

set noerrorbells
set nowrap
"set autoindent
"set smartindent noexpandtab tabstop=4 shiftwidth=4
set smartcase

colorscheme monokai

call plug#begin('~/.vim/plugged')

Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
Plug 'vimsence/vimsence'

call plug#end()

let g:UltiSnipsEditSplit="vertical"
let g:UltiSnipsJumpForwardTriggeri="<c-b>"
let g:UltiSnipsJumpBackwardTriggeri="<c-z>"

" Change color schemes
" Type :color <space> then ctr+d to list all available color schemes
" color ron

set hlsearch
set incsearch

set bg=dark
" Turn on line numbers
set number relativenumber

set clipboard=unnamedplus

" Set default ruler at column 80
" set colorcolumn=80
highlight ColorColumn ctermbg=4

" Set tabs to be equivalent to 4 spaces
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set fileformat=unix
set nocompatible
set smartindent
" Set up make file integration
" Use :copen to view makefile output and :cclose to close

autocmd BufnewFile *.cpp -r ~/Desktop/Code/CP/snippets/basic_template.cpp

noremap <F2> <ESC> :w <CR> :!cat > in <CR>
autocmd filetype cpp noremap <F8> <ESC> :w <CR> :!g++ -std=c++20 -DLOCAL -O2 -o %< % && ./%< <CR>
"autocmd filetype cpp nnoremap <F9> :w <bar> Make <CR>
autocmd filetype cpp nnoremap <F10> :vertical terminal ++shell ++cols=40 ./%:r<CR>
autocmd filetype cpp nnoremap <F11> :!./%:r<CR>
" Enable man page plugin, do :Man <i> <func>
runtime ftplugin/man.vim

" Sets up highlighting for trailing whitespace
" These commands should be last because otherwise weird things happen
highlight ExtraWhitespace ctermbg=red  guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

" When doing split and vsplit, automatically move the cursor to the new split
set splitright
set splitbelow
