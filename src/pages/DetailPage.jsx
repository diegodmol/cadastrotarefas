import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";

function DetailPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500  p-6">
      <div className="w-[500] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <Button
            onClick={() => navigate(-1)}
            className=" text-white absolute left-0 top 0 bottom 0"
          >
            <ChevronLeftIcon></ChevronLeftIcon>
          </Button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
