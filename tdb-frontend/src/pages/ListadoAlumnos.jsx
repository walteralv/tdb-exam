import React, { useEffect, useState } from 'react';
import AlumnoListItem from '../components/ListadoAlumnosItem';
import axios from 'axios';

const ListadoAlumnos = () => {
  // Datos de ejemplo de alumnos
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/students'); // Asegúrate de que la URL sea correcta
        console.log(response.data);
        setStudents(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-800">Listado de Alumnos</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Lista de estudiantes registrados</p>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {students.map((student) => (
              <AlumnoListItem
                key={student.studentId}
                id={student.studentId}
                nombre={student.name}
                dni={student.dni}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListadoAlumnos;