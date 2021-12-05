console.log("start");

function loginUser (email, password){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve ({ email });
        },3000);
    });
      
}
function getUserCourses (email){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve  (["course 1", "course 2", "course 3"]);
        },2000); 
    });
}
function getCourseDetail (id){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve  ("course title is js");
        },1000);  
    });
}
console.log("end");
// const user = loginUser("gomnam@yahoo.com", 1234);


async function displayCourseDetail () {
    const user =await loginUser("gomnam@yahoo.com", 1234);
    console.log(user);
    // {email: 'gomnam@yahoo.com'}
    const courses =await getUserCourses(user.email);
    console.log(courses);
    // (3) ['course 1', 'course 2', 'course 3']
    const detail =await getCourseDetail(courses[0]);
    console.log(detail);
    // course title is js
};
displayCourseDetail ();

//write with arrow function
// const displayCourseDetail = async ()=> {
//     const user =await loginUser("gomnam@yahoo.com", 1234);
//     console.log(user);
//     const courses =await getUserCourses(user.email);
//     console.log(courses);
//     const detail =await getCourseDetail(courses[0]);
//     console.log(detail);
// };
// displayCourseDetail ();