function ctWd() {
    var walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    var count = 0;

    var node;
    var textNodes = [];

    while (node = walker.nextNode()) {
        textNodes.push(node.nodeValue);
        count += node.nodeValue.split(' ').length;
    }
    return count;
}

$.get(chrome.extension.getURL('/templates/inject.html'), function (data) {
    $(data).appendTo('body');
    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');
});