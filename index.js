var JSSoup = require('jssoup').default;




const createCompletion = (body) => {
var resultArray = {}
var returnArray = {};
var errorsArray = {"error" : "false"}
if (!body) 
	{
		errorsArray["error"] = true ;
		errorsArray["message"] = "no html input";
	  resultArray["errors"] = errorsArray;
    return resultArray;process.exit()
  } 


var soup = new JSSoup(body).find('form'); 
if (!soup) 
  {
    errorsArray["error"] = true;
    errorsArray["message"] = "no body found"
    resultArray["errors"] = errorsArray;
    return resultArray;
  }

if (soup.attrs.action) resultArray["redirectFormUrl"] = soup.attrs.action


var elementNumber = 0
var tag = soup.findAll('input')

for (var test in tag) 
  {
    var name = tag[elementNumber].attrs.name;    
    var id = tag[elementNumber].attrs.id;    
    var type = tag[elementNumber].attrs.type;    
    var value = tag[elementNumber].attrs.value
    var inclist = ["text","email","password","hidden"]
    
    var x = (name || id)
    switch (true) 
      {
          case inclist.includes(type) :
            switch (true) 
              {

                case firstname_array.includes(x) : returnArray[x] = randomFirstName(); break;                case lastname_array.includes(x) : returnArray[x] = randomLastName(); break;
                case username_array.includes(x) : returnArray[x] = randomPseudo();     break;                case email_array.includes(x) : returnArray[x] = randomEmail(); break;
                case password_array.includes(x) : returnArray[x] = randomString(9);    break;                case fullname_array.includes(x) : returnArray[x] = randomFullName(); break;
                default : requestArray[x] = value;

              }break;

          case type === "checkbox" : returnArray[x] = "on"; break;
          case type === "radio" : returnArray[x] = value; break
          case type === "date" : returnArray[x] = birthdate; break;
          case type === "submit" : if (x)  returnArray[x] = value; break;
      }


    if (scrf_array.includes(x)) { returnArray[x] = value; }



  elementNumber++
  }
resultArray["errors"] = errorsArray 
resultArray["prefilled"] = returnArray 
return resultArray;
}









const getInputsTypes = (body) => {
var resultArray = {}
var returnArray = {};
var errorsArray = {"error" : "false"}
if (!body) 
  {
    errorsArray["error"] = true ;
    errorsArray["message"] = "no html input";
    resultArray["errors"] = errorsArray;
    return resultArray;process.exit()
  } 


var soup = new JSSoup(body).find('form'); 
if (!soup) 
  {
    errorsArray["error"] = true;
    errorsArray["message"] = "no body found"
    resultArray["errors"] = errorsArray;
    return resultArray;
  }

var elementNumber = 0
var tag = soup.findAll('input')
for (var test in tag) 
  {
    var name = tag[elementNumber].attrs.name;    
    var id = tag[elementNumber].attrs.id;    
    var type = tag[elementNumber].attrs.type;    
    var x = (name || id)
    if (x) {if ( typeof type !== 'undefined' && type ) { returnArray[x] = type}}
  elementNumber++
  }

  resultArray["errors"] = errorsArray 
  resultArray["prefilled"] = returnArray 
  return resultArray; 
}

exports.createCompletion = createCompletion;
exports.getInputsTypes = getInputsTypes;


  var blacklist_errors="havebeenblacklisted isnowblacklisted isblacklisted ipblacklist blacklistip ipcooldown ipcooldown ipaddress ipblocked blockedip ipAddress blacklistedip blacklistip ipcooldown iponcooldown ipaddresscooldown toomanyrequest toomuchrequest requesteccess ipslowdown"
  var pagenotefound_errors="error404 error404 404error 404error pagenotfound 404notfound pagedoesn'texist pagedoesnotexists urlnotfound"
  var birthday_array="birthdate birth_day birth_date date_birth date_births date_of_birth datebirth date borndate born_date"
  var phonenumber_array="phonenumber phone_number phone number_phone phone_contact phone_nmbr nmbr_phone phone_numbers phones phones_number"
  var fullname_array="full_name fullname name_full full_names namefull"
  var firstname_array="firstname_user fname_user user_fname user_first user_first_name firstname fname f_name first_name firstnames f_names f_name first_names"
  var lastname_array="user_lastname user_last_name txt_lastname last_name lastname lname l_name last_name lastnames l_names l_name last_name"
  var username_array="txt_username username login pseudo pseudonime user_name user_names pseudos usr_name usrname"
  var password_array="new_pass new_pass2 new_password new_password2 pwd pwd2 txt_password password2 passwd pword retyped_password password_confirmation confirmation_password passwordconfirmation password_confirm confirm_password password pass secret user_password password_user usr_password password_usr repeatpassword repassword r_password password_repeat repeat_password password_r r_password"
  var email_array="emailadresse email_addr user_email email email2 mail emailaddress email_address adresse_email adresse_mail mail_address mails email"
  var scrf_array="token tokens csrf_token activation_token token_csrf signup_form_token scrf_token csrf csrf_token csrf_tokens token_csrf"
  
  function randomBirthDayDate() { getRandomInt(1990 , 2001) + "-" + getRandomInt(1 , 29) + "-" + getRandomInt(1 , 12)}
  function randomEmail() {var emailPrefix = ["@gmail.com", "@hotmail.fr", "@hotmail.com", "@yahoo.fr", "@gmail.fr", "@laposte.fr", "@icloud.com"];return randomString(10) + emailPrefix[Math.floor(Math.random() * emailPrefix.length)];}
  function randomLastName() {var firstnames = ["Jackson", "Jaheim", "Werrie", "Elisa", "Martin", "Anthonny", "Matthew", "Danniel", "Thiery", "Anabelle", "Sergio", "Martinny", "Dounya", "Eva", "Hanna", "Annette", "Serenity", "Marissa", "Avaya", "Remy", "Lennon", "Effie", "Sabina", "Marta", "Briana", "Nick", "Caiden", "Ranveer", "Roan", "Zofia", "Yvie", "Jolene", "Massimo", "Jena", "Izzie", "Milo", "Ehsan", "Viktor", "Leena", "Johan", "Mayur", "Sumaya", "Vinnie", "Morris", "Sophia", "Maeve", "Nicolas", "Janine", "Jayson", "Sania", "Cruz", "Jozef", "Abubakr", "Callie", "Louie", "Alexandre", "Kelise", "Murtaza", "Keira", "Rahma", "Monika", "Hallam", "Norah", "Ayah", "Isaak", "Theresa", "Mason", "Terrell", "Elijah", "Gabriel", "Maryam", "Mohammad", "Ellise", "Keri", "Isadora", "Lamar", "Aadam", "Elle", "Miller", "Danika", "Kaylee", "Ruqayyah", "Eadie", "Allison" ,"Calista","China","Kerry","Blizzard","Lorri","Glance","Charles","Morgenstern","Johanna","Hick","David","Howey","Libby","Hewlett","Olivia","Azure","Ryann","Deines","Lindy","Leo","Amalia","Dykeman","Jennifer","Highsmith","Annemarie","Arneson","Kali","Dykstra","Candi","Rossbach","Zulema","Turberville","Marvis","Wygant","Raye","Fleig","Melani","Bushman","Eunice","Vinton","Virgie","Kimbrell","Joan","Feathers","Amiee","Durfee","Walton","Houseman","Tenisha","Graybill","Concepcion","Shriner","Thaddeus","Beecher","Alyse","Borunda","Maryellen","Wathen","Chu","Hugley","Grisel","Mcgahan","Mariko","Wymer","Ingeborg","Lara","Leota","Stickland","Mercedes","Mccaslin","Malia","Messenger","Preston","Galaz","Valorie","Sapienza","Ferdinand","Soler","Claud","Dowdle","Luise","Roser","Lonna","Gurganus","Natividad","Goff","Gavin","Stalnaker","Mikel","Cortinas","Tammi","Pelchat","Peter","Jacobo","Dolly","Obert","Alla","Peterson","Marleen","Oliverio"];return firstnames[Math.floor(Math.random() * firstnames.length)];}
  function randomFirstName() {var lastnames = ["Correa", "Summers", "Michael", "Mccallum", "Nguyen", "Small", "Mckenzie", "Keith", "Contreras", "Alexander", "Crowther", "Thompson", "Gould", "Haas", "Wilkinson", "Ritter", "Roach", "Mosley", "Crane", "Carney", "Reeve", "Barnes", "Neville", "Kerr", "Squires", "Gallagher", "Chan", "Martins", "Gibson", "Bullock", "Pratt", "Timms", "Holcomb", "Singleton", "Kemp", "Greenaway", "Bradshaw", "Ireland", "Neale", "Sparrow", "Mccann", "Woodward", "Compton", "Gamble", "Rodrigues", "Ibarra", "Cornish", "William", "Lim", "Coombes", "Mcarthur", "Sheppard", "Wilder", "Molloy", "Burke", "Frey", "Espinoza", "Ho", "Weaver", "Li", "Church", "Blankenship", "Bauer", "Nixon", "Baird","Janetta","Janowski","Gregoria","Malta","Bernardine","Hummer","Brigida","Ryant","Grover","Garabedian","Treena","Schrader","Sonny","Barnum","Alica","Harwood","Florentina","Croxton","Earle","Carrozza","Elma","Fiske","Bert","Paradiso","Ashely","Apperson","Malik","Joyce","Corinne","Standley","Ranae","Kuchera","Lavette","Seigel","Elizabet","Converse","Chery","Crisp","Elane","Ankney","Keely","Frizell","Annemarie","Difranco","Delores","Wainright","Candy","Furby","Johnson","Denniston","Yuki","Stickney","Donny","Starkweather","Zulema","Vanatta","Jeanice","Degregorio","Dung","Pugliese","Weston","Kleeman","Katelyn","Joshua","Conception","Berkeley","Kristeen","Sobel","Brande","Wotton","Mae","Hamaker","Carri","Chandler","Bao","Tsuji","Clyde","Enriguez","Eddie","Messer","Luanne","Hunt","Giuseppe","Espitia","Gema","Chartrand","Marvel","Mease","Tambra","Mcwain","Jina","Maciel","Donnette","Kushner","Ted","Balliet","Charissa","Merz","Oneida","Parmer"];return lastnames[Math.floor(Math.random() * lastnames.length)]}
  function randomPseudo() {var names = ["Mega", "Eternal", "Slir", "Enio", "Cask", "Madik", "Aqua", "Mastok", "Prog", "xX", "000", "Enia", "Gal", "Xyz", "Aix", "Snov", "Shie", "use", "77", "119", "Guin", "Score", "Light", "Mousk", "Moska", "Gunny", "Gun", "Zomb", "Infin", "Ity", "Gnioks", "Smart", "LeBg", "Malabar", "Eterox", "Nig", "Stuv", "Gambi", "Nin", "Nazz", "Subzz", "SxModl", "Put", "Sus", "Anak", "Imath", "Scri", "Ymox", "Ablar", "Balan", "YT_", "Souc", "Namas", "Oul", "Kiger", "Fola", "Sakb", "Sepho", "Orap", "Espi", "Esped", "Xyns", "Kyo", "Yre", "Enor", "Ivik", "Quiz", "_Bruks", "Enol_", "Airp", "Pods", "Chai", "Bouc", "Tush", "Patz", "Fail", "Refl", "Shi", "Dem1", "LaRi", "Ekt", "Espr", "Oala", "Ekl", "Sept", "John", "Diff", "Tomb", "Eur", "Shne", "Toy", "Rmal", "Teko", "Iznir", "Rmir", "Inuy", "1Ya", "Tuko"];return names[Math.floor(Math.random() * names.length)] + names[Math.floor(Math.random() * names.length)];}
  function randomFullName() {return randomFirstName() + " " + randomLastName()}
  function randomString(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * charactersLength));}
      return result;}
  function PhoneNumber() {
      var result = '';
      var characters = '0123456789';
      var charactersLength = 10;
      for (var i = 0; i < 10; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;}
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}