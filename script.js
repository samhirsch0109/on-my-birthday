function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-text').src = '#BAD/BROKENIMAGE' //CHANGE 
        return
    }

    if(!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color, backgroundColor;

    switch(randomNumber){
        case 0:
            answer ="";
            image ="img/yes.png";
            color = "text-success";
            backgroundColor = "bg-info";
            break;
            case 1:
                answer = "";
                image = "img/no.png" //change this!!;
                color = "text-danger";
                break;
            case 2:
                answer = "";
                image = "img/askagain.png" //change this!!;
                color = "text-secondary";
                break;
            case 3:
                answer = "";
                image = "img/maybe.png";//change this!!;
                color = "text-warning";
                break;
            case 4:
                answer = "";
                image = "img/cannotpredict.png";//change this!!;
                color = "text-muted";
                break;
            case 5:
                answer = "";
                image = "img/dontcountonit.png";//change this!!;
                color = "text-danger";
                break;
            case 6:
                answer = "";
                image = "img/mostlikely.png";//change this!!;
                color = "text-success";
                break;
            case 7:
                answer = "";
                image = "img/outlooknotgood.png";//change this!!;
                color = "text-danger";
                break;
            default:
                break;
        }
    
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;
    }