using CFDTrollo.Models;

namespace CFDTrollo.Data;

public static class InitialBoardState
{
    public static BoardState GetInitialState()
    {
        return new BoardState
        {
            Lists = new List<List>
            {
                new List
                {
                    Id = "list-1",
                    Title = "To Do",
                    Cards = new List<Card>
                    {
                        new Card { Id = "card-1", Title = "Design new landing page mockup" },
                        new Card { Id = "card-2", Title = "Research competitor pricing strategies" },
                        new Card { Id = "card-3", Title = "Schedule team meeting for Q2 planning" }
                    }
                },
                new List
                {
                    Id = "list-2",
                    Title = "In Progress",
                    Cards = new List<Card>
                    {
                        new Card { Id = "card-4", Title = "Implement user authentication system" },
                        new Card { Id = "card-5", Title = "Write API documentation" }
                    }
                },
                new List
                {
                    Id = "list-3",
                    Title = "Review",
                    Cards = new List<Card>
                    {
                        new Card { Id = "card-6", Title = "Code review for payment integration" },
                        new Card { Id = "card-7", Title = "Test mobile responsiveness" }
                    }
                },
                new List
                {
                    Id = "list-4",
                    Title = "Done",
                    Cards = new List<Card>
                    {
                        new Card { Id = "card-8", Title = "Set up CI/CD pipeline" },
                        new Card { Id = "card-9", Title = "Deploy staging environment" },
                        new Card { Id = "card-10", Title = "Create project documentation" }
                    }
                }
            }
        };
    }
}
