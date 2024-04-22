import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";
import { useParams } from "react-router-dom";

export const SkillEdit = () => {
    const { formValues, onChange, skill, getSkill, updateSkill } = useContext(SkillContext);
    let { id } = useParams();

    useEffect(() =>{
        getSkill(id);
    }, [])
    return(
        <div className="mt-12 px-24">
        <form onSubmit={updateSkill} className="bg-white w-full mx-auto p-4 shadow-md rounded-sm">
            <div className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                    </label>
                    <input
                        name="name"
                        value={formValues["name"]}
                        onChange={onChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="mb-2 text-sm font-medium">
                        Slug
                    </label>
                    <input
                        name="slug"
                        value={formValues["slug"]}
                        onChange={onChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
                    />
                </div>
            </div>
            <div className="my-4">
                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700">
                    Update
                </button>
            </div>
        </form>
    </div>
    )
}