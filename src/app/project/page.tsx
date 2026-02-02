import { getAllProjects } from '@/lib/data/projects';
import { ProjectGrid } from '@/components/organisms/ProjectGrid';
import { Typography } from '@/components/atoms/Typography';

export default function ProjectPage() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen bg-off-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto w-full">
                {/* Title Section */}
                <div className="mb-16 border-b border-tech-black pb-8">
                    <Typography variant="caption" className="mb-4 text-signal-red">
                        ARCHIVE 2024—2025
                    </Typography>
                    <Typography variant="h1" className="text-5xl md:text-7xl font-light tracking-tighter">
                        Engineering Archive
                    </Typography>
                    <Typography variant="body" className="mt-6 max-w-xl text-tech-black/60">
                        Selected works demonstrating the convergence of rigorous engineering and minimal aesthetics.
                        <br className="hidden md:block" />
                        정밀한 공학 설계를 통해 구현된 LAYER 0의 주요 프로젝트 아카이브입니다.
                    </Typography>
                </div>

                {/* Project Grid */}
                <ProjectGrid projects={projects} />
            </div>
        </main>
    );
}