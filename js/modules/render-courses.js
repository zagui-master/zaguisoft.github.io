import{courses_information}from"../data/data-courses.js";const currentUser=JSON.parse(sessionStorage.getItem("current_user"))??[],courseContainer=document.getElementById("conten_courses");localStorage.setItem("stock",JSON.stringify(courses_information));const courseStock=JSON.parse(localStorage.getItem("stock")),updatedCourseStock=JSON.parse(localStorage.getItem(`updated_stock_${currentUser}`)),renderCourse=e=>`\n    <div class="card-course" id="${e.id}">\n      <div class="conteiner-card-info">\n        <img src="${e.course_img}" alt="" class="course-image" />\n        <div class="container-info">\n          <span class="course-name">${e.course_name}</span>\n          <span class="course-creator">${e.course_creator}</span>\n          <div class="conteniner-price">\n            <span>$</span>\n            <span class="course-price">${e.course_price}</span>\n          </div>\n        </div>\n      </div>\n      <a id="show_info_course" href="./info-course.html"><i class="bi bi-question-circle-fill"></i></a>\n      <button class="button ${e.id}" data-testid="course-${e.id}" >${e.state}</button>\n    </div>\n  `;export const renderCourses=()=>{const e=(updatedCourseStock??courseStock).map((e=>renderCourse(e))).join("");courseContainer.innerHTML=e};renderCourses();