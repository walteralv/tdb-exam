import React from 'react';

const Ingreso = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Ingreso de Notas</h2>
          <p className="mt-1 text-sm text-gray-600">Ingrese los datos del alumno y sus notas</p>
        </div>
        <form className="px-4 py-5 sm:p-6 space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Nombre del alumno"
            />
          </div>
          <div>
            <label htmlFor="curso" className="block text-sm font-medium text-gray-700">Curso</label>
            <input
              type="text"
              name="curso"
              id="curso"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Nombre del curso"
            />
          </div>
          <div>
            <label htmlFor="nota1" className="block text-sm font-medium text-gray-700">Nota 1</label>
            <input
              type="number"
              name="nota1"
              id="nota1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="20"
            />
          </div>
          <div>
            <label htmlFor="nota2" className="block text-sm font-medium text-gray-700">Nota 2</label>
            <input
              type="number"
              name="nota2"
              id="nota2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="20"
            />
          </div>
          <div className="pt-5">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ingreso;