import Card from "@/components/atoms/Card";
import CardContact from "@/components/molecules/CardContact";

import CardExperience from "@/components/molecules/CardExperience";
import Title from "@/components/atoms/Title";
import dayjs from "dayjs";
import {
  listContact,
  listHobbies,
  listLanguage,
  listSocial,
  softSkills,
} from "./data";

async function getUsers() {
  const res = await fetch(`${process.env.API}/user/924454380025282561`);
  if (res) {
    return res.json();
  }
}

export default async function Home() {
  const users = await getUsers();
  const dataHobies = listHobbies;
  const dataSocials = listSocial;
  const dataSoftSkill = softSkills;
  const dataLanguage = listLanguage;
  const dataContacts = listContact;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 w-full">
        {/* for bio */}
        <Card>
          <div className="text-white">
            <div className="grid grid-cols-2 gap-2 items-center">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-full w-full h-full max-w-[250px] max-h-[250px] object-center"
                  src="./profile.jpg"
                />
              </div>
              <div>
                <p className=" text-gray font-thin text-xl md:text-5xl">
                  Reza Agung
                </p>
                <p className=" text-white font-medium text-xl md:text-6xl">
                  Prasetya
                </p>
                <p className=" text-gray font-bold text-xs md:text-2xl lg:text-3xl">
                  Front End Engineer
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-2 mt-5">
              {dataContacts?.map((item, key) => {
                return (
                  <CardContact icon={item?.icon} desc={item?.desc} key={key} />
                );
              })}
            </div>

            {/* Knowledge */}
            <section className="mt-5">
              <Card>
                <div>
                  <p className="font-bold text-xl mb-5">Soft Skills</p>
                  <ul>
                    {dataSoftSkill?.map((item, key) => {
                      return (
                        <li key={key} className="flex items-center">
                          <svg
                            className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Card>
            </section>

            {/* languages */}
            <section className="mt-5 ">
              <Card>
                <div>
                  <p className="font-bold text-xl mb-5">Language</p>
                  {dataLanguage?.map((item, key) => {
                    return (
                      <div key={key}>
                        <span>{item.language}</span>
                        <div className="w-full bg-gray rounded-full h-2.5 mb-4 ">
                          <div
                            className={`${
                              item?.progress > 80
                                ? "bg-green-500"
                                : "bg-yellow-400"
                            } h-2.5 rounded-full`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </section>

            {/* social media */}
            <section className="mt-5 ">
              <Card>
                <div className="grid grid-cols-1 gap-2">
                  <p className="font-bold text-xl mb-5">Social</p>
                  {dataSocials?.map((item, key) => {
                    return (
                      <CardContact
                        icon={item?.icon}
                        desc={item?.social}
                        key={key}
                      />
                    );
                  })}
                </div>
              </Card>
            </section>

            {/* hobbies */}
            <section className="mt-5">
              <Card>
                <div>
                  <p className="font-bold text-xl mb-5">Hobbies</p>
                  <div className="grid grid-cols-4 gap-2">
                    {dataHobies?.map((item, key) => {
                      return (
                        <div
                          className="flex flex-col items-center justify-center"
                          key={key}
                        >
                          <img src={item?.urlPic} />
                          <p>{item?.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </Card>

        <div className="p-3 bg-white rounded-xl">
          {/* Experiences */}
          <section>
            <Title title={"Experiences"} />
            {users?.data?.experiences?.map((item: any, key: number) => {
              return (
                <CardExperience
                  key={key}
                  type={"Experience"}
                  title={item?.company}
                  subTitle={item?.role}
                  startDate={dayjs(item?.start_date).format("YYYY-MM-DD")}
                  endDate={dayjs(item?.end_date).format("YYYY-MM-DD")}
                  desc={item?.description}
                  subList={item?.job_details}
                />
              );
            })}
          </section>

          {/* Educationo */}
          <section className="my-5">
            <Title title={"Educations"} />
            {users?.data?.education?.map((item: any, key: number) => {
              return (
                <CardExperience
                  key={key}
                  type={"Education"}
                  title={item?.major}
                  subTitle={item?.school_name}
                  startDate={dayjs(item?.start_date).format("YYYY-MM-DD")}
                  endDate={dayjs(item?.end_date).format("YYYY-MM-DD")}
                />
              );
            })}
          </section>

          {/* Certificate & course */}
          <section className="my-5">
            <Title title={"Certificate & Course"} />
            {users?.data?.certificate?.map((item: any, key: number) => {
              return (
                <CardExperience
                  key={key}
                  type={"Education"}
                  title={item?.name}
                  desc={item?.description}
                  startDate={dayjs(item?.start_date).format("YYYY-MM-DD")}
                />
              );
            })}
          </section>

          <section className="my-5">
            <Title title={"Skills"} />
            <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-2">
              {users?.data?.skill?.map((item: any, key: number) => {
                return (
                  <li key={key} className="flex items-center text-xs">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {item?.name}
                  </li>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
