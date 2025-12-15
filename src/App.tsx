import './App.css'
import ProfileComponent from './components/ProfileComponent'
import InformationComponent from './components/InformationComponent'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5 pt-5">

        {/* Profile Section */}
        <motion.div
          className="md:col-span-1 flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ProfileComponent />
        </motion.div>

        {/* Information Section */}
        <motion.div
          className="md:col-span-2 flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <InformationComponent />
        </motion.div>

      </div>
    </>
  )
}

export default App
