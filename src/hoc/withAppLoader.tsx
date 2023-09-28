import React, { useEffect, useState, ComponentType } from "react";
import { useGetProfilesQuery } from "../redux/api/profile";
import Loader from "../components/ui/loader";
import {useGetFacultiesQuery} from "../redux/api/faculty";
import {useGetGroupsQuery} from "../redux/api/group";

const withAppLoader = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    return (props: P) => {
        const [isLoading, setLoading] = useState<boolean>(true);
        const {isSuccess: profileSuccess, isError: profileError} = useGetProfilesQuery('profile'); // Передаем undefined в качестве параметров запроса
        const {isSuccess: facultySuccess, isError: facultyError} = useGetFacultiesQuery('faculties')
        const {isSuccess: groupsSuccess, isError: groupsError} = useGetGroupsQuery('groups')

        useEffect(() => {
            if (profileSuccess && facultySuccess && groupsSuccess) {
                setLoading(false)
            }
        }, [profileSuccess, facultySuccess, groupsSuccess]);

        return (
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <WrappedComponent {...(props as P)} />
                    </>
                )}
            </>
        );
    };
}

export default withAppLoader;
