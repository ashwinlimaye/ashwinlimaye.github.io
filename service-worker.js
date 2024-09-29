self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.searchParams.has('link')) {
      const sharedLink = url.searchParams.get('link');
      // Handle the shared link (e.g., save it to IndexedDB or display it)
      console.log('Received shared link:', sharedLink);
    }
  });