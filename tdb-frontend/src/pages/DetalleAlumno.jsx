import React from 'react';

const DetalleAlumno = ({ id }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800">Detalle del Alumno {id}</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Información detallada del estudiante</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Nombre</dt>
              <dd className="mt-1 text-sm text-gray-900">Alumno {id}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Curso</dt>
              <dd className="mt-1 text-sm text-gray-900">Curso {id}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Nota 1</dt>
              <dd className="mt-1 text-sm text-gray-900">90</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Nota 2</dt>
              <dd className="mt-1 text-sm text-gray-900">85</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Promedio</dt>
              <dd className="mt-1 text-sm text-gray-900">87.5</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Condición</dt>
              <dd className="mt-1 text-sm text-green-600 font-semibold">Aprobado</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Fecha de Registro</dt>
              <dd className="mt-1 text-sm text-gray-900">01/01/2024</dd>
            </div>
          </dl>
        </div>
        {/* <div className="px-4 py-4 sm:px-6 bg-gray-50 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
            Editar Información
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DetalleAlumno;