package com.app.dao;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.UserEntity;

public interface UserEntityRepository extends JpaRepository<UserEntity, Integer> {

	Optional<UserEntity> findByEmail(String email);

	Optional<UserEntity> findByEmailAndPassword(String email,String pass);
	
	
	
	
}
