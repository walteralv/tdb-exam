import React from 'react';
import { Link } from 'react-router-dom';

const AlumnoListItem = ({ id, nombre, dni }) => {
  return (
    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
      <Link to={`/alumno/${id}`} className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">{nombre.charAt(0)}</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{nombre}</p>
          <p className="text-sm text-gray-500 truncate">DNI: {dni}</p>
        </div>
        <div>
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </Link>
    </li>
  );
};

export default AlumnoListItem;