const version=6;
const cacheName=`Portfolio-${version}`
let assets=[
    "/index.html",
    "/css/style.css",
    "/img/about.jpg",
    "/img/box1.png",
    "/img/layer2.jpg",
    "/img/profile-1.jpeg",
    "/img/profile-2.jpeg",
    "/img/profile-3.jpeg",
    "/img/profile-4.jpeg",
    "/img/profile-5.jpeg",
    "/img/teams1.jpg",
    "/img/teams2.jpg",
    "/img/teams3.jpg",
    "/img/teams4.jpg",
    "/css/font.css",
    "/js/main.js",
    "/js/jquery.js",
    "/js/app.js",
    "/sw.js",
    "/manifest.json",
]
// لو الخط جايبه من بره احط اللينك عادي بدون اسلاش 

self.addEventListener('install',(ev)=>{
    console.log('Install')
    // كده بقدر اخزن الملفات في الكاش 
    ev.waitUntil(
        caches.open(cacheName).then((cache)=>{

            cache.addAll(assets).then().catch()
    
        }).catch((error)=>{
            console.warn(error)
        })
    )

    self.skipWaiting()
  

    // كده مش هيشتغل بدون ال wait 
    // علشان بقوله خزنلي الملفات دي وخش علي الاكتفيتد افرض هو ملحقش يخزن الملفات دي يبقي كل الملفات مش هتتخزن 
    // هعمل انو متخزنش الا لما تبقي جاهزه اتنقل 
})


self.addEventListener('activate',(ev)=>{
    // بيجهز الملفات لما اعمل الابديت يمسح اي فيرجان قديم ويضيف الجديد 
    // منه بيبدء يجهز اللي بعده 
    // نخش علي ده بعد ماتخزن هو ايفنت بستخدمه علشان لما اعمل اي تحديث جديد بفريجن جديد امسح القديم 
    ev.waitUntil(
        
        caches.keys().then((keys)=>{
            return Promise.all(
                            // يعني متنفزش الباقي الا لما تخلص ده
                 keys.filter((key)=> key !== cacheName)
                 .map((key)=>{
                    return caches.delete(key)
                 })
            )
            // هعمل الخاص بالاشعارات 
        })

        

    )
    
})

/*
شرحهم المفروض لما بعمل ابديت بيروح من الانستول لاكتيفيت 
ولو عملت الابديت روحت من الانستول لاكتفيت مش منطقي اللي يروحو لبعض بسرعه 
في حاجه اسمها ويتنج علشان يستني وبعدين يروح لاكتفيتد



*/
// علشان يرجعلي البيانات من الكاش 
self.addEventListener('fetch',(fetchdata)=>{
// هنبدء مع ده ازاي نتعامل بيه 
// وصل لمرحله اني اجيب البيانات من الكاش استورج 
// لما اعمل ريفرش هيجيب كل الريكوسات اللي اقدر اعمل رجوع للبيانات 
// الريكوستات اللي هشغلها اوف لاين 
// console.log(fetchdata)


// اول حاجه  الريسبونس اللي راجه من الكاش 

fetchdata.respondWith(
    // يعني هترجع اللي هيرجع مع الريسبونس ويز
// هيبحث في الريكوستات 
    caches.match(fetchdata.request).then(res=>{
        return res || fetch(fetchdata.request) // في حاله لو الريسبونس دا نل هتجيبه من النت ورك 
        // نروح نجرب نشغله اوف لاين هنلاقيه اشتعل
        // واقدر اخزن صفحه اوف لاين بس دي اللي تتعرض اي ملف براحتي 
    }) 

)

    
})



/*
شرح الكاش اولا محتاج اعملها اسماء بفيرجان 

في قلب الاوبن 
add() لاضافه ملف واحد فقط
addAll() لاضافه اكتر من ملف 
match() لو عاوز اعمل سيرش حوالين ملف معين 
delete() لملف معين او مجموعه ملفات 
key() بجيب جميع الكي اللي عندي 
put() لو عاوز اعمل ابديت للكاش 








*/

// !!!! PushNotification
self.addEventListener('push',(NotificationEvent)=>{
    // عايز اشغل الرساله 
    NotificationEvent.waitUntil(
        self.registration.showNotification()
    )
    
})

// وهروج اشوفه بيسمح بالاشعارات ام لاء 
// ثم اروج اشوف النوتفيكشن موجوده في المتصفح هلاقي عرض الرساله النوتفكيشن لما بكلك علي الزر ولما اكلك عرض البدي والتايتل 
// علشان يظهر في المتصفح بشغل الريكورد