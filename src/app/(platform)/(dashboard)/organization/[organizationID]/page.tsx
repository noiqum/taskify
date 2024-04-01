import db from "../../../../../lib/prisma";
const OrganizationIdPage = async () => {
  async function create() {
    "use server";

    await db.board.create({
      data: {
        title: "test",
      },
    });
  }

  return (
    <div className="w-full mb-20">
      <span>organization</span>
    </div>
  );
};

export default OrganizationIdPage;
