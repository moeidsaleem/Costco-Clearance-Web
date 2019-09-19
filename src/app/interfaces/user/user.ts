
enum userTypes { admin, investor, manager, staff, client  }

export interface User {
    name:String,
    dob:Date,
    email:String,
    password:String,
    lastSeen:Date,
    location:String,
    online:boolean,
    photo:String,
    userType:userTypes,
    deviceId: String
}
