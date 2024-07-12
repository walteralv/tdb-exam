import React, { useState } from 'react';

const Ingreso = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    note1: '',
    note2: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3000/course/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({
          studentId: parseInt(formData.studentId),
          courseId: parseInt(formData.courseId),
          note1: parseInt(formData.note1),
          note2: parseInt(formData.note2)
        })
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al guardar los datos');
      }

      setSuccess(true);
      setFormData({ studentId: '', courseId: '', note1: '', note2: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Ingreso de Notas</h2>
          <p className="mt-1 text-sm text-gray-600">Ingrese los datos del alumno y sus notas</p>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-6">
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">ID del Alumno</label>
            <input
              type="number"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="ID del alumno"
              required
            />
          </div>
          <div>
            <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">ID del Curso</label>
            <input
              type="number"
              name="courseId"
              id="courseId"
              value={formData.courseId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="ID del curso"
              required
            />
          </div>
          <div>
            <label htmlFor="note1" className="block text-sm font-medium text-gray-700">Nota 1</label>
            <input
              type="number"
              name="note1"
              id="note1"
              value={formData.note1}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="20"
              required
            />
          </div>
          <div>
            <label htmlFor="note2" className="block text-sm font-medium text-gray-700">Nota 2</label>
            <input
              type="number"
              name="note2"
              id="note2"
              value={formData.note2}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="20"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">Datos guardados con éxito</p>}
          <div className="pt-5">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ingreso;