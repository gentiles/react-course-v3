import { useState, useEffect } from "react";

function customHooks(defaultValue){
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const resp = await fetch(defaultValue);
            // console.log(resp);
            if (!resp.ok) {
              setIsError(true);
              setIsLoading(false);
              return;
            }
    
            const user = await resp.json();
            setUser(user);
          } catch (error) {
            setIsError(true);
            // console.log(error);
          }
          // hide loading
          setIsLoading(false);
        };
        fetchUser();
      }, []);

    return {isLoading, isError, user}

}

export default customHooks