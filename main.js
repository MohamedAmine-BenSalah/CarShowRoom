function getinfo(){
    var fname = window.localStorage.getItem('fname');
    var infoarea = document.getElementById('fname');
    infoarea.innerHTML= fname.toString();
    var lname = document.getElementById('lname');
    var infoarea = document.getElementById('lname');
    infoarea.innerHTML = lname.toString();
    var subjectarea = document.getElementById('subject');
    var subject = JSON.parse(localStorage.getItem('subject')|| []);
    subject.map(subject);
    var newsubject = document.createElement('p');
    newsubject.innerHTML = subject;
    subjectarea.appendChild(newsubject);
};
function createInfo(){
    const value = document.getElementById('subject').value;
    var infoarea = document.getElementById('subject');
    const newsubject = document.createElement('p');
    newsubject.innerHTML = value;
    infoarea.appendChild('newsubject');
    var subject = JSON.parse(
        window.localStorage.getItem('subject') || []);
        subject.push(value);
        window.localStorage.setItem('subject',JSON.stringify(subject))
    
}