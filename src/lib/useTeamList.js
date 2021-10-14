import { useEffect } from "react"
import { useState } from "react"
import { fetchGoogleSpreadsheetAsJson } from "./fetchGoogleSpreadsheetAsJson"

export function useTeamList() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    fetchGoogleSpreadsheetAsJson().then(data => setTeam(data))
  }, [])

  return team
}
