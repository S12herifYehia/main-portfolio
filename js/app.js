if("serviceWorker" in navigator){
    // navigator // هو عباره عن السجل المدني للمتصفح بتاعي 
    navigator.serviceWorker.register('/sw.js',{
        scope:'/'
    }).then((reg)=>{
        console.log("File is register",reg)
    }).catch((error)=>{
        console.warn(error)
    })

  
}

// ثم هروح علي sw.js


if("Notification" in window){
    // متى يتم تشغيل هذا الجزء؟
    // 🔹 يتم تشغيله فقط عند أول مرة يزور المستخدم الموقع أو إذا لم يسبق له إعطاء الإذن. 
    Notification.requestPermission().then(per=>{
        if(per == 'granted'){
            console.log("Permission Is Granded")
        }else{
            console.log('Permission is Denied')
        }
    })
}




// إرسال إشعار إلى المستخدم بعد حصول الموقع على إذن الإشعارات.
function sendNotification(){
    // لتحقق مما إذا كان المتصفح يدعم Push API
    if(window.PushManager){
        // PushManager هو كائن مسؤول عن الإشعارات الفورية (Push Notifications).
        navigator.serviceWorker.ready.then(reg=>{
            // الانتظار حتى يصبح Service Worker جاهزًا
            reg.showNotification('Eltorki Dev Hub',{
                // showNotification(title, options) هو API خاص بـ Service Worker لإظهار إشعارات.
                body:'Dev Hub Welcome ',
                icon:"/img/icon/1.jpg",
                requireInteraction: true, // ✅ سيبقي الإشعار ظاهرًا حتى يتم النقر عليه
                persist: true, // يحاول إبقاء الإشعار في مركز الإشعارات (قد لا يكون مدعومًا في كل المتصفحات)
                actions: [
                    { action: "open", title: "افتح الموقع" },
                    { action: "dismiss", title: "إغلاق" }
                ]
            })
        })
    }
}

// محتاج اشغل الرساله دي بالايفنت بوش 
