const userInfo = () => {
  // getting Info from Contact Section
  const userName = document.getElementById('username').value;
  const userEmail  = document.getElementById('email').value;
  const userMessage = document.getElementById('textarea').value;

  const userData = {
    name: userName,
    email: userEmail,
    message: userMessage
  }
  
  // localStorage.setItem('userData', userData.name);
  // localStorage.setItem('userData', userData.email);
  // localStorage.setItem('userData', userData.message);
  console.log({userData});
  
}
const newsletterData = () => {
// Email from Newsletter
const newsletterEmail = document.getElementById('newsletter').value;

const subscribe = {
  subscriber: newsletterEmail
}
console.log({subscribe});
localStorage.setItem('subscribe', subscribe.subscriber);

}
// Adding Comments on Single Blog
const addComment = () => {
  const name = document.getElementById('commentName').value;
  const email = document.getElementById('commentEmail').value;
  const comment = document.getElementById('commentMessage').value;

  const commentsData = {
    name:name,
    email: email,
    comment: comment
  }
  console.log({commentsData});
  localStorage.setItem('commentsData', commentsData.comment);
}
// Adding Comments on Sports
const addCommentOnSports = () => {
  const name = document.getElementById('commentName').value;
  const email = document.getElementById('commentEmail').value;
  const comment = document.getElementById('commentMessage').value;

  const sportsComments = {
    name:name,
    email: email,
    comment: comment
  }
  console.log({sportsComments});
  localStorage.setItem('sportsComments', sportsComments.comment);
}