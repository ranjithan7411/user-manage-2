package com.usermanage.UserManage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanage.UserManage.model.Room;


@Repository
public interface RoomRepo extends JpaRepository<Room, Integer> {
	
}
