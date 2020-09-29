/*////////////////////////////// JS */

const text = `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט
לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק
מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?
לתיג ישבעס.
קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קוואזי במר
מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי
בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
בלוקריה שיצמה ברורק.`

function truncate(str, no_words) {
  const newText= ( str.split(" ").splice(0,no_words).join(" "));
  console.log(newText +"...")
}

truncate(text,10)


const input = document.getElementById("inputId")
const button= document.getElementById("button")
button.addEventListener('click', function(){
const val = input.value
alert(val)
})

/*////////////////////////////// jQuery */
/* 1 */
function box(){
    $('#box').text('hello')
}

 $('#tab1').on('click',box())
   
 $('#tab2').on('click',function(){
    $('#box').empty()
    $('#box').text('tab2')
 })
 

 $('#tab3').on('click',function(){
    $('#box').empty()
    $('#box').text('tab3')
 })

 $('#tab1').on('click',box)
   

/* 3 */
 function validateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {

    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function validateName (name){
    if (name.length==0){
        alert("You have not  entered name or last name!")
        return (false)
    }
    else{
        return(true)
    }
}

const post =async (data)=>{
    try{
    const response = await axios.post(`https://www.test.com/info.php`,data) 
    console.log(response)
    }catch(err){
      console.log(err)
    }
    
}

$("#submit").on('click',function(){
    const email = $('#email').val()
    const fname = $('#fName').val()
    const lname = $('#lName').val()
    if(!validateEmail(email))return
    if(!validateName(fname))return
    if(!validateName(lname))return
    const data = {fname,lname,email}
    post(data)
})

