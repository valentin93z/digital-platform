import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Демо',
  description: 'Демо-версия учебного портала',
}

const RootLayout = async ({ children }) => {
  return (
    <html lang='ru'>
      <head>
        <link rel="icon" href="assets/icons/favicon.ico" sizes="any" />
      </head>
      <body>
        <Provider>
          <div className='w-full min-h-screen fixed bg-neutral-100 dark:bg-neutral-900 -z-10' />
            {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;