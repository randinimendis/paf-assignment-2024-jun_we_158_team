package com.linhtch90.backend.repository;

import java.util.List;
import java.util.Optional;

import com.linhtch90.backend.entity.PostEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<PostEntity, String> {
    Optional<List<PostEntity>> findByUserId(String id);
    Optional<List<PostEntity>> findByUserIdOrderByCreatedAtDesc(String id);
    void deleteById(Long postId);
    Optional<PostEntity> findById(Long postId);
    
}
