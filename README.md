<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="manifest" href="manifest.json">
    <title>Read Later</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        #links { list-style-type: none; padding: 0; }
        li { margin: 10px 0; }
        @media (max-width: 600px) {
            body { font-size: 14px; }
        }
    </style>
</head>
<body>
    <h1>Read Later</h1>
    <ul id="links"></ul>
    <script>
        // Check if there's a shared URL
        if (window.location.search) {
            const params = new URLSearchParams(window.location.search);
            const sharedLink = params.get('link');
            if (sharedLink) {
                const li = document.createElement('li');
                li.textContent = sharedLink;
                document.getElementById('links').appendChild(li);
            }
        }

        // Function to share a link
        function shareLink(link) {
            console.log('Sharing link:', link);
            // Uncomment the following code to test on mobile devices
            
            if (navigator.share) {
                navigator.share({
                    title: 'Read Later',
                    url: link
                }).then(() => {
                    console.log('Successfully shared');
                }).catch(error => {
                    console.error('Error sharing:', error);
                });
            } else {
                alert('Sharing not supported on this browser');
            }
            
        }

        // Example usage
        shareLink('https://example.com');
    </script>
</body>
</html>