const container = document.querySelector("#container")

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, {type: "getPossibleWords"}, setPossibleWords)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case "updatePossibleWords":
      setPossibleWords(message.words)
  }
})

function setPossibleWords(words) {
  container.innerHTML = ""

  for (let i = 0; i < words.length; i++) {
    const button = document.createElement("button")
    button.innerHTML = words[i]
    button.addEventListener("click", selectWord)
    container.appendChild(button)
  }
}

function selectWord(evt) {
  const word = evt.target.innerHTML

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {type: "selectWord", word})
  })
}