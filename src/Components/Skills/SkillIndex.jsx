import { useEffect, useContext } from "react";
import SkillContext from "../../Context/SkillContext";
export const SkillIndex = () => {
    const { skills, getSkills, deleteSkill } = useContext(SkillContext);

    useEffect(() => {
        getSkills();
    }, [])
    return (
        <div className="m-12">
            <div className="flex justify-end m-2 p-2">
                <a href="/skills/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Add New skill here</a></div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slug
                            </th>
                            {/* <th scope="col" className="px-6 py-3"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill) => {
                            return (
                                <tr key={skill.id} className="bg-white dark:bg-gray-800">
                                    <td className="px-6 py-4">{skill.name}</td>
                                    <td className="px-6 py-4">{skill.slug}</td>
                                    <td className="px-6 py-4 flex gap-8">
                                        <a href={`/skills/${skill.id}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">Edit</a>
                                        <button onClick={() => deleteSkill(skill.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}