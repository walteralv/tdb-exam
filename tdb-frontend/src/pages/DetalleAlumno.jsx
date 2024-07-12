import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleAlumno = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Asumimos que el id del estudiante viene como parámetro en la URL

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/students/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del estudiante');
        }
        const data = await response.json();
        setStudentData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  if (!studentData) return <div className="text-center py-10">No se encontró información del estudiante</div>;

  const { name, dni, records } = studentData;

  return (
    <div className="min-h-screen bg-gray-100 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Información del Estudiante</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Detalles personales y académicos</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nombre completo</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{name}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">DNI</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dni}</dd>
              </div>
              {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ID de Estudiante</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{id}</dd>
              </div> */}
            </dl>
          </div>
        </div>

        <div className="mt-5 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Registros de Cursos</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Historial académico del estudiante</p>
          </div>
          <div className="border-t border-gray-200">
            {records.map((record) => (
              <div key={record.recordId} className="px-4 py-5 sm:p-6 border-b border-gray-200 last:border-b-0">
                <h4 className="text-lg font-semibold text-gray-800">{record.course.name}</h4>
                <p className="mt-1 text-sm text-gray-600">{record.course.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Nota 1</dt>
                    <dd className="mt-1 text-sm text-gray-900">{record.note1}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Nota 2</dt>
                    <dd className="mt-1 text-sm text-gray-900">{record.note2}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Promedio Final</dt>
                    <dd className="mt-1 text-sm text-gray-900">{record.finalCourseAverage}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Condición</dt>
                    <dd className={`mt-1 text-sm font-semibold ${record.condition === 'Aprobado' ? 'text-green-600' : 'text-red-600'}`}>
                      {record.condition}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Fecha de Registro</dt>
                    <dd className="mt-1 text-sm text-gray-900">{new Date(record.registerDate).toLocaleString()}</dd>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleAlumno;