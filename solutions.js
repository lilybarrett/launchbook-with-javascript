// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav");
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments');
var lastComIndex = comments.length - 1;
comments[lastComIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('comments')[3];
// Exercise: Find one of the ads in the sidebar and hide them.
var adHide = document.getElementsByClassName('ad-slot')[0];
adHide.style.visibility = "hidden";
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var statusUpdateForm = document.getElementsByClassName('status-update')[0];
statusUpdateForm.style.visibility = "visible";
var adsHide = document.getElementsByClassName('ads')[0];
adsHide.style.visibility = "visible";
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var adsUpdateForm = document.getElementsByClassName('ad-slot')[0];
var imgSlot = adsUpdateForm.getElementsByTagName('img')[0];
imgSlot.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var postMedia = document.getElementsByClassName('post media')[3];
var postElement = postMedia.getElementsByClassName('media-body')[0];
var post = postElement.getElementsByTagName('p')[0];
post.innerHTML = "THIS IS AN INCREDIBLE POST!!!!";
// Exercise: Find the first post and add the .post-liked class to it.
var postMedia = document.getElementsByClassName('post media')[0];
postMedia.className = postMedia.className + " post-liked";
// Exercise: Find the second post and remove the .post-liked class.
var postMedia = document.getElementsByClassName('post media')[1];
postMedia.classList.remove('post-liked');
