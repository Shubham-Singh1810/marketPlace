import {useState} from "react";

function Post() {
    const[showComments, setShowComments] = useState(false)
  return (
    <div className="post">
      <div className="d-flex justify-content-between px-2">
        <div className="userNav d-flex">
          <img src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658" />
          <div className="my-auto ms-2">
            <p className="mb-0">Shubham Singh</p>
            <p className="text-primary followP mb-0"  style={{cursor:"pointer"}}>Add Friend</p>
          </div>
        </div>
        <p className="my-auto dot" style={{cursor:"pointer"}}>. . .</p>
      </div>
      <div>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/056/424/780/large/vimal-patel-19w1.jpg?1669209658"
          className="img-fluid"
        />
      </div>
      <div className="d-flex px-2 actionContainer mb-1 justify-content-between">
        <div>
          <i className="fa fa-heart"></i>
          <i className="fa fa-comment mx-2"></i>
        </div>
        <i className="fa fa-save"></i>
      </div>
      <div className="mb-3">
       <p className="mb-0">102 likes</p> 
       <p className="mb-0"><b>Shubham Singh </b> Hello world</p>
       
       {showComments?<div className="commentBox mt-2">
        <p className="mb-0"><b>Shubham Singh</b> Hello world</p>
        <p className="mb-0"><b>Shubham Singh</b> Hello world</p>
        <p className="mb-0"><b>Shubham Singh</b> Hello world</p>
        <p className="mb-0"><b>Shubham Singh</b> Hello world</p>
        <p className="mb-0"><b>Shubham Singh</b> Hello world</p>
        <p className="text-secondary mb-0" style={{fontSize:"15px", cursor:"pointer"}}><u onClick={()=>setShowComments(false)}>Hide comments</u></p>
        
       </div>: <p className="text-secondary mb-0" style={{fontSize:"15px", cursor:"pointer"}}><u onClick={()=>setShowComments(true)}>View Comments</u></p> }
       
      </div>
    </div>
  );
}

export default Post;
