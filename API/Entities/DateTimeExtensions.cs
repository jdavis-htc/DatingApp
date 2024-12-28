namespace API.Entities;

public static class DateTimeExtensions
{
    public static int CalculatedAge(this DateOnly dob)
    {
        var today = DateOnly.FromDateTime(DateTime.Now);
        var age = today.Year - dob.Year;

        if(dob > today.AddYears(-age)) age--;

        return age;
    }
}