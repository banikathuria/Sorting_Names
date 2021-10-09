var name_of_the_student=[];
function Submit(){
    var name_1=document.getElementById("student1").value 
    var name_2=document.getElementById("student2").value 
    var name_3=document.getElementById("student3").value 
    var name_4=document.getElementById("student4").value 
    var name_5=document.getElementById("student5").value 
    name_of_the_student.push(name_1)
    name_of_the_student.push(name_2)
    name_of_the_student.push(name_3)
    name_of_the_student.push(name_4)
    name_of_the_student.push(name_5)
    document.getElementById("output").innerHTML=name_of_the_student
document.getElementById("sort_b").style.display="inline-block"
document.getElementById("submit_b").style.display="none"
}
function Sorting (){
name_of_the_student.sort()    
document.getElementById("output").innerHTML=name_of_the_student
}

