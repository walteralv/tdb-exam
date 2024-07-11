import React from 'react';
import AlumnoListItem from '../components/ListadoAlumnosItem';

const ListadoAlumnos = () => {
  // Datos de ejemplo de alumnos
  const alumnos = [
    { id: 1, nombre: 'Alumno 01', dni: '2024001' },
    { id: 2, nombre: 'Alumno 02', dni: '2024002' },
    { id: 3, nombre: 'Alumno 03', dni: '2024003' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-800">Listado de Alumnos</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Lista de estudiantes registrados</p>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {alumnos.map((alumno) => (
              <AlumnoListItem
                key={alumno.id}
                id={alumno.id}
                nombre={alumno.nombre}
                dni={alumno.dni}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListadoAlumnos;