async function videosList() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    
    return convertedConnection;
}

async function createVideo(title, description, url, image) {
    const connection = await fetch("http://localhost:3000/videos", 
        { method: "POST", 
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            title: title,
            description: `${description} mil visualizações`,
            url: url,
            image: image
          })  
        });

    const convertedConnection = await connection.json();

    return convertedConnection;
}

async function searchVideo(term) {
  const connection = await fetch(`http://localhost:3000/videos?q=${term}`);
  const convertedConnection = connection.json();

  return convertedConnection;
}

export const apiConnect = {
    videosList, createVideo, searchVideo
}