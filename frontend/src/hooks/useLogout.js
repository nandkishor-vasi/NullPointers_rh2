import { useAuthContext } from "./useAuthContext.js";
import { useWorkoutsContext } from "./useWorkoutContext.js";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: WorkoutDispatch } = useWorkoutsContext();

    const logout = () => {
        localStorage.setItem("user");

        dispatch({ type: "LOGOUT" });
        WorkoutDispatch({ type: "SET_WORKOUTS", payload: null });
    };
    return { logout };
};