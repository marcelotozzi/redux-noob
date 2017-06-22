// increment
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comment
export function addComment(postId, author, addComment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    addComment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}