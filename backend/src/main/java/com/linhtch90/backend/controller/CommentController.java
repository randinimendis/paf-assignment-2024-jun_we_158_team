package com.linhtch90.backend.controller;

import com.linhtch90.backend.entity.CommentEntity;
import com.linhtch90.backend.entity.CommentPostRequestEntity;
import com.linhtch90.backend.entity.IdObjectEntity;
import com.linhtch90.backend.service.CommentService;
import com.linhtch90.backend.service.ResponseObjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/insertcomment")
    public ResponseEntity<ResponseObjectService> insertComment(@RequestBody CommentPostRequestEntity postedComment) {
        CommentEntity inputComment = postedComment.getCommentEntity();
        IdObjectEntity inputPostId = postedComment.getPostId();
        return new ResponseEntity<ResponseObjectService>(commentService.insertComment(inputComment, inputPostId.getId()), HttpStatus.OK);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    @PutMapping("/updatecomment/{commentId}")
    public ResponseEntity<ResponseObjectService> updateComment(@PathVariable String commentId, @RequestBody CommentEntity updatedComment) {
        return new ResponseEntity(this.commentService.updateComment(commentId, updatedComment), HttpStatus.OK);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @DeleteMapping("/deletecomment/{commentId}")
    public ResponseEntity<ResponseObjectService> deleteComment(@PathVariable String commentId) {
        return new ResponseEntity(this.commentService.deleteComment(commentId), HttpStatus.OK);
    }

    @PostMapping("/getcomments") 
    public ResponseEntity<ResponseObjectService> getComments(@RequestBody IdObjectEntity inputPostId) {
        return new ResponseEntity<ResponseObjectService>(commentService.getComments(inputPostId.getId()), HttpStatus.OK);
    }
}
