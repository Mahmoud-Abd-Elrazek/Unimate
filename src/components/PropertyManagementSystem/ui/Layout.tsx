import React from 'react';
// import Nav from '../../navbar/NavBar';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <div dir='ltr'>
        <Nav />
      </div> */}
      <main>{children}</main>
    </div>
  );
};