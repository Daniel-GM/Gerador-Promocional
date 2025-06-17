import SelectProducts from './screens/SelectProducts'
import CreateSale from './screens/CreateSale'
import DownloadPage from './screens/DownloadPage'
import { useState } from 'react'

const HomePage = () => {
  const [stage, setStage] = useState("selectProducts")
  // const [stage, setStage] = useState("createSale")

  return (
    <>
      {stage === "selectProducts" && <SelectProducts setStage={setStage} />}
      {stage === "createSale" && <CreateSale setStage={setStage} />}
      {stage === "downloadPage" && <DownloadPage />}
    </>
  )
}

export default HomePage