package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="all_users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserEntity extends BaseEntity {
   
    @Column(length = 30,unique = true)
	private String email;
    @Column(length = 500)
	private String password;
	public UserEntity( String email, String password) {
		super();
		
		this.email = email;
		this.password = password;
	}
	private boolean active;
	//UserEntity *--->*Role
	@ManyToMany(fetch = FetchType.EAGER)//default fetching policy --lazy ---to lift roles data make it eager
	                                   //making eager is acceptable sol since max size of many(roles) is 2
	@JoinTable(name = "all_user_roles" ,joinColumns=@JoinColumn(name="user_id")
	,inverseJoinColumns=@JoinColumn(name="role_id"))
	//It is applied to theowning side of an association.
	private Set<Role> roles=new HashSet<>();
}
