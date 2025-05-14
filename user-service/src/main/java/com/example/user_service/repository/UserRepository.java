package com.example.userservice.repository;

import com.example.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Du kannst hier zusätzliche Abfragen wie z.B. nach dem Benutzernamen hinzufügen.
    User findByUsername(String username);
}
