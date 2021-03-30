const weatherFrom = document.getElementById('locationFrom')
const search = document.querySelector('input')
const messageOne = document.getElementById('msg-1')
const messageTwo = document.getElementById('msg-2')

     weatherFrom.addEventListener('submit' , (e) => {
        e.preventDefault()
        const location = search.value

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''

        fetch('http://api.weatherstack.com/current?access_key=ddb01314061a387290c62807254a8419&query=' + location)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    messageOne.textContent = 'Wrong inpput. Unable To find Location . Try again.'
                }
                else{
                    console.log(data)
                    messageOne.textContent = data.request.query
                    messageTwo.textContent =  data.location.name + '. It is currently ' + data.current.temperature + ' degress out. Weather feels like ' + data.current.feelslike +' degress.'
                   
                    const currentImg = document.createElement("img");  
                    currentImg.src = data.current.weather_icons;
                    const imgBox = document.getElementById("imgBox");
                    imgBox.innerHTML = '';
                    imgBox.appendChild(currentImg);
                }
            })
       
})   



