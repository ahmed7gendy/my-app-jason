// src/components/AdminPage.js
import React, { useState, useEffect } from 'react';
import { database, auth } from '../firebase';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await database.ref('users').once('value');
      const usersList = [];
      usersSnapshot.forEach(user => {
        usersList.push(user.val());
      });
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    await database.ref(`users/${newEmail}`).set({
      email: newEmail,
      role: newRole
    });
  };

  return (
    <div>
      <h1>إدارة المستخدمين</h1>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="البريد الإلكتروني الجديد"
      />
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="الدور"
      />
      <button onClick={handleAddUser}>إضافة مستخدم</button>
      <ul>
        {users.map(user => (
          <li key={user.email}>{user.email} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
