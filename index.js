const copy = async (html5Element) => {
  try {
    if (!navigator.clipboard) {
      throw new Error(
        'Clipboard API not available in this browser, redirecting to depreciated method!'
      );
    }

    await navigator.clipboard.writeText(html5Element.value);
    return true;
  } catch (error) {
    html5Element.focus();
    html5Element.select();
    const copied = document.execCommand('copy');

    if (!copied) {
      console.error('Failed while copying data from html5Element!', error);
    }
  }
};

module.exports = { copy };
