import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Home() {
	const BUTTON_NUMBER = 6;

	return (
		<div className="flex flex-col justify-between p-4 h-screen max-w-lg m-auto">
			<div className="space-y-4">
				<canvas
					id="myCanvas"
					// width=""
					// height="300"
					// style={{ border: '1px solid #000000' }}
					className=" w-[480px] border h-[450px]"
				></canvas>

				<div className="grid text-slate-400 grid-cols-2 gap-4">
					{Array.from(Array(BUTTON_NUMBER).keys()).map((i) => (
						<Button
							key={i}
							variant="dashed"
							size="lg"
							className=""
						>
							<Plus
								size={20}
								strokeWidth={1.5}
							/>
						</Button>
					))}
				</div>
			</div>

			<div className="flex justify-between w-full gap-4">
				<Button
					className="w-1/2"
					variant="ghost"
				>
					Bring Back
				</Button>
				<Button
					className="w-1/2"
					variant="default"
					disabled
				>
					Deliver Plate Please
				</Button>
			</div>
		</div>
	);
}
